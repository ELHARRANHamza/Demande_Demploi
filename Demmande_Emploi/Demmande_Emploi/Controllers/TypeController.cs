using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demmande_Emploi.Models;
using Demmande_Emploi.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Demmande_Emploi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class TypeController : ControllerBase
    {
        public Repository<Type_> Rep_Type { get; }

        public TypeController(Repository<Type_> rep_Type)
        {
            Rep_Type = rep_Type;
        }
        // GET: api/Type
        [HttpGet]
        public async Task<IEnumerable<Type_>> Affiche()
        {
            return await Rep_Type.List();
        }

        [HttpGet("{id}", Name = "Details_Type")]
        public async Task<Type_> Details_Type(int id)
        {
            return await Rep_Type.Find(id);
        }

        // POST: api/Ville
        [HttpPost]
        public async Task Add([FromBody] Type_ type_)
        {
            await Rep_Type.Add(type_);
        }

        // PUT: api/Ville/5
        [HttpPut("{id}")]
        public async Task Edit(int id, [FromBody] Type_ type_)
        {
            var find = await Rep_Type.Find(id);
            find.nom = type_.nom;
            await Rep_Type.Update(find);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await Rep_Type.Delete(id);
        }
    }
}
