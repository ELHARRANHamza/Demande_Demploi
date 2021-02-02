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
    public class SectorController : ControllerBase
    {
        public Repository<Sector> Rep_Sector { get; }

        public SectorController(Repository<Sector> rep_Sector)
        {
            Rep_Sector = rep_Sector;
        }
        // GET: api/Ville
        [HttpGet]
        public async Task<IEnumerable<Sector>> Affiche()
        {
            return await Rep_Sector.List();
        }

        [HttpGet("{id}", Name = "Details_Sec")]
        public async Task<Sector> Details_Sec(int id)
        {
            return await Rep_Sector.Find(id);
        }

        // POST: api/Ville
        [HttpPost]
        public async Task Add([FromBody]Sector sector)
        {
            await Rep_Sector.Add(sector);
        }

        // PUT: api/Ville/5
        [HttpPut("{id}")]
        public async Task Edit(int id, [FromBody]Sector sector)
        {
            var find = await Rep_Sector.Find(id);
            find.sector_Nom = sector.sector_Nom;
            await Rep_Sector.Update(find);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await Rep_Sector.Delete(id);
        }
    }
}
