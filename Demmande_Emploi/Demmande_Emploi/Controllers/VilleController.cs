using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demmande_Emploi.Models;
using Demmande_Emploi.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Demmande_Emploi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class VilleController : ControllerBase
    {

        public Repository<Ville> Rep_Ville { get; }
        public UserManager<AppUsers> UserManager { get; }
        public SignInManager<AppUsers> SignInManager { get; }

        public VilleController(Repository<Ville> rep_Ville,
            UserManager<AppUsers> userManager,
            SignInManager<AppUsers> signInManager)
        {
            Rep_Ville = rep_Ville;
            UserManager = userManager;
            SignInManager = signInManager;
        }
        // GET: api/Ville
        [HttpGet]
        public async Task<IEnumerable<Ville>> Affiche()
        {
            //if (SignInManager.IsSignedIn(User))
            //{
                return await Rep_Ville.List();
            //}
            //return BadRequest("It's Bad");
        }

        [HttpGet("{id}", Name = "Details_Ville")]
        public async Task<Ville> Details_Ville(int id)
        {
            return await Rep_Ville.Find(id);
        }

        // POST: api/Ville
        [HttpPost]
        public async Task Add([FromBody] Ville ville)
        {
           await Rep_Ville.Add(ville);
        }

        // PUT: api/Ville/5
        [HttpPut("{id}")]
        public async Task Edit(int id, [FromBody] Ville ville)
        {
            var find =await Rep_Ville.Find(id);
            find.ville_Name = ville.ville_Name;
           await Rep_Ville.Update(find);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await Rep_Ville.Delete(id);
        }
    }
}
