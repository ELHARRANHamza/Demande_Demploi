﻿using Demmande_Emploi.Db;
using Demmande_Emploi.DTO.users;
using Demmande_Emploi.Models;
using Demmande_Emploi.Repository.Admin;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace Demmande_Emploi.Repository.Admin
{
    public class AdminRepo : IAdminRepository
    {
        private readonly ApplicationDbContext _db;
        private readonly UserManager<AppUsers> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AdminRepo(ApplicationDbContext db, UserManager<AppUsers> userManager, RoleManager<IdentityRole> roleManager)
        {
            _db = db;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async Task<AppUsers> AddUserAsync(AddUserModel model)
        {
            if (model == null)
            {
                return null;
            }

            var user = new AppUsers
            {
                UserName = model.UserName,
                Email = model.Email,
                EmailConfirmed = model.EmailConfirmed,
                PhoneNumber = model.PhoneNumber
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                if (await _roleManager.RoleExistsAsync("User"))
                {
                    if (!await _userManager.IsInRoleAsync(user, "User") && !await _userManager.IsInRoleAsync(user, "Admin"))
                    {
                        await _userManager.AddToRoleAsync(user, "User");
                    }
                }
                return user;
            }
            return null;
        }

        public async Task<AppUsers> EditUserAsync(EditUserModel model)
        {
            if (model.Id == null)
            {
                return null;
            }

            var user = await _db.Users.FirstOrDefaultAsync(x => x.Id == model.Id);
            if (user == null)
            {
                return null;
            }

            if (model.Password != user.PasswordHash)
            {
                var result = await _userManager.RemovePasswordAsync(user);
                if (result.Succeeded)
                {
                    await _userManager.AddPasswordAsync(user, model.Password);
                }
            }

            _db.Users.Attach(user);
            user.Email = model.Email;
            user.UserName = model.UserName;
            user.EmailConfirmed = model.EmailConfirmed;
            user.PhoneNumber = model.PhoneNumber;

            _db.Entry(user).Property(x => x.Email).IsModified = true;
            _db.Entry(user).Property(x => x.UserName).IsModified = true;
            _db.Entry(user).Property(x => x.EmailConfirmed).IsModified = true;
            _db.Entry(user).Property(x => x.PhoneNumber).IsModified = true;
            await _db.SaveChangesAsync();
            return user;
        }

        public async Task<AppUsers> GetUserAsync(string id)
        {
            if (id == null)
            {
                return null;
            }

            var user = await _db.Users.FirstOrDefaultAsync(x => x.Id == id);
            if (user == null)
            {
                return null;
            }
            return user;
        }

        public async Task<IEnumerable<AppUsers>> GetUsers()
        {
            return await _db.Users.ToListAsync();
        }

        public async Task<bool> DeleteUserAsync(List<string> ids)
        {
            if (ids.Count < 1)
            {
                return false;
            }

            var i = 0;
            foreach (string id in ids)
            {
                var user = await _db.Users.FirstOrDefaultAsync(x => x.Id == id);
                if (user == null)
                {
                    return false;
                }
                _db.Users.Remove(user);
                i++;
            }
            if (i > 0)
            {
                await _db.SaveChangesAsync();
            }
            return true;
        }

        public async Task<IEnumerable<UserRolesModel>> GetUserRoleAsync()
        {
            var query = await (
                from userRole in _db.UserRoles
                join users in _db.Users
                on userRole.UserId equals users.Id
                join roles in _db.Roles
                on userRole.RoleId equals roles.Id
                select new
                {
                    userRole.UserId,
                    users.UserName,
                    userRole.RoleId,
                    roles.Name
                }).ToListAsync();

            List<UserRolesModel> userRolesModels = new List<UserRolesModel>();
            if (query.Count > 0)
            {
                for (int i = 0; i < query.Count; i++)
                {
                    var model = new UserRolesModel
                    {
                        UserId = query[i].UserId,
                        UserName = query[i].UserName,
                        RoleId = query[i].RoleId,
                        RoleName = query[i].Name
                    };
                    userRolesModels.Add(model);
                }
            }
            return userRolesModels;
        }

        public async Task<IEnumerable<IdentityRole>> GetRolesAsync()
        {
            return await _db.Roles.ToListAsync();
        }

        public async Task<bool> EditUserRoleAsync(EditUserRoleModel model)
        {
            if (model.UserId == null || model.RoleId == null)
            {
                return false;
            }

            var user = await _db.Users.FirstOrDefaultAsync(x => x.Id == model.UserId);
            if (user == null)
            {
                return false;
            }

            var currentRoleId = await _db.UserRoles.Where(x => x.UserId == model.UserId).Select(x => x.RoleId).FirstOrDefaultAsync();
            var currentRoleName = await _db.Roles.Where(x => x.Id == currentRoleId).Select(x => x.Name).FirstOrDefaultAsync();
            var newRoleName = await _db.Roles.Where(x => x.Id == model.RoleId).Select(x => x.Name).FirstOrDefaultAsync();

            if (await _userManager.IsInRoleAsync(user, currentRoleName))
            {
                var x = await _userManager.RemoveFromRoleAsync(user, currentRoleName);
                if (x.Succeeded)
                {
                    var s = await _userManager.AddToRoleAsync(user, newRoleName);
                    if (s.Succeeded)
                    {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
