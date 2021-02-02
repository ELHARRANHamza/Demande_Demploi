using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demmande_Emploi.Db;
using Demmande_Emploi.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Demmande_Emploi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class GestionRoleController : ControllerBase
    {
        public RoleManager<IdentityRole> Manager { get; }
        public ApplicationDbContext DbContext { get; }

        public GestionRoleController(RoleManager<IdentityRole> manager,
            ApplicationDbContext dbContext)
        {
            Manager = manager;
            DbContext = dbContext;
        }
        // GET: api/GestionRole
        [HttpGet]
        public async Task<IEnumerable<Roles_DTO>>Get()
        {
            var list_Roles = await DbContext.Roles.ToListAsync();
            var roles = new List<Roles_DTO>();
            foreach(var item in list_Roles)
            {
                roles.Add(new Roles_DTO() { 
               id=item.Id,
               name=item.Name
                });

            }
            return roles;
        }

      
        // POST: api/GestionRole
        [HttpPost]
        public async Task<IActionResult>Post([FromBody] Roles_DTO roles_)
        {
            var roles = new IdentityRole()
            {
                Name = roles_.name
            };
            var result = await Manager.CreateAsync(roles);
            if (result.Succeeded)
            {
                return Ok("It's Good");
            }
            return BadRequest("It's Bad");
        }

        // PUT: api/GestionRole/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody]Roles_DTO roles_)
        {
            var find_Roles = await Manager.Roles.SingleOrDefaultAsync(r => r.Id == id);
            find_Roles.Name = roles_.name;
            var result = await Manager.UpdateAsync(find_Roles);
            if (result.Succeeded)
            {
                return Ok("It's Big");
            }
            else
            {
                return BadRequest("It's Bad");
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var find_Roles = await Manager.Roles.SingleOrDefaultAsync(r => r.Id == id);
            var result = await Manager.DeleteAsync(find_Roles);
            if (result.Succeeded)
            {
                return Ok("It's Big");
            }
            return BadRequest("It's Bad");
        }
    }
}
