﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demmande_Emploi.DTO.users;
using Demmande_Emploi.Models;
using Demmande_Emploi.Repository.Admin;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AngularToAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;

        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
        }

        [Route("GetAllUsers")]
        [HttpGet]
        public async Task<IEnumerable<AppUsers>> GetAllUsers()
        {
            var users = await _repo.GetUsers();
            if (users == null)
            {
                return null;
            }
            return users;
        }

        [Route("AddUser")]
        [HttpPost]
        public async Task<IActionResult> AddUser(AddUserModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _repo.AddUserAsync(model);
                if (user != null)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }

        [Route("GetUser/{id}")]
        [HttpGet]
        public async Task<ActionResult<AppUsers>> GetUser(string id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var user = await _repo.GetUserAsync(id);
            if (user != null)
            {
                return user;
            }
            return BadRequest();
        }

        [Route("EditUser")]
        [HttpPut]
        public async Task<ActionResult<AppUsers>> EditUser(EditUserModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var user = await _repo.EditUserAsync(model);
            if (user != null)
            {
                return user;
            }
            return BadRequest();
        }

        [Route("DeleteUsers")]
        [HttpPost]
        public async Task<IActionResult> DeleteUsers(List<string> ids)
        {
            if (ids.Count < 1)
            {
                return BadRequest();
            }

            var result = await _repo.DeleteUserAsync(ids);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [Route("GetUserRole")]
        [HttpGet]
        public async Task<IEnumerable<UserRolesModel>> GetUserRole()
        {
            var userRoles = await _repo.GetUserRoleAsync();
            if (userRoles == null)
            {
                return null;
            }
            return userRoles;
        }

        [Route("GetAllRoles")]
        [HttpGet]
        public async Task<IEnumerable<IdentityRole>> GetAllRoles()
        {
            var roles = await _repo.GetRolesAsync();
            if (roles == null)
            {
                return null;
            }
            return roles;
        }

        [Route("EditUserRole")]
        [HttpPut]
        public async Task<IActionResult> EditUserRole(EditUserRoleModel model)
        {
            if (ModelState.IsValid)
            {
                var x = await _repo.EditUserRoleAsync(model);
                if (x)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }
    }
}