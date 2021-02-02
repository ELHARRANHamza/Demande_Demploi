using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demmande_Emploi.Db;
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
    public class CategorieController : ControllerBase
    {
        public Repository<Categories> Rep_Cat { get; }
        public ApplicationDbContext Context { get; }
        public SignInManager<AppUsers> SignIn { get; }

        public CategorieController(Repository<Categories> rep_Cat,
            ApplicationDbContext context,
            SignInManager<AppUsers> signIn)
        {
            Rep_Cat = rep_Cat;
            Context = context;
            SignIn = signIn;
        }
        // GET: api/Categorie
        [HttpGet]
        public async Task<IActionResult> Affiche()
        {     
            return Ok(await Rep_Cat.List());
        }

       [HttpGet("{id}", Name = "Details_Cat")]
        public Categories Details_Cat(int id)
        {
            return Context.Categories.SingleOrDefault(c =>c.id==id);
        }
        // POST: api/categories 
        [HttpPost]
        public async Task Add([FromBody]Categories categories )
        {
            await Rep_Cat.Add(categories );
        }

        // PUT: api/categories /5
        [HttpPut("{id}")]
        public async Task Edit(int id, [FromBody]Categories categories )
        {
            var find = await Rep_Cat.Find(id);
            find.cat_Nom = categories.cat_Nom;
            await Rep_Cat.Update(find);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await Rep_Cat.Delete(id);
        }
    }
}
