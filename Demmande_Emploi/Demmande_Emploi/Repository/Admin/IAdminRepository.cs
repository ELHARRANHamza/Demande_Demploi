using Demmande_Emploi.DTO.users;
using Demmande_Emploi.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.Repository.Admin
{
    public interface IAdminRepository
    {
        Task<IEnumerable<AppUsers>> GetUsers();
        Task<AppUsers> AddUserAsync(AddUserModel model);
        Task<AppUsers> GetUserAsync(string id);
        Task<AppUsers> EditUserAsync(EditUserModel model);
        Task<bool> DeleteUserAsync(List<string> ids);
        Task<IEnumerable<UserRolesModel>> GetUserRoleAsync();
        Task<IEnumerable<IdentityRole>> GetRolesAsync();
        Task<bool> EditUserRoleAsync(EditUserRoleModel model);
    }
}
