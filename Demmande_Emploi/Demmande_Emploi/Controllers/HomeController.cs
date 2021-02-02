using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Demmande_Emploi.Repository;
using Demmande_Emploi.Models;
using Demmande_Emploi.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace Demmande_Emploi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class HomeController : ControllerBase
    {
        public Repository<Annonce> Rep_Ann { get; }
        public Repository<Sector> Rep_Sect { get; }
        public IHostingEnvironment Hosting { get; }

        public HomeController(Repository<Annonce> rep_Ann,
            Repository<Sector>rep_Sect,
            IHostingEnvironment hosting)
        {
            Rep_Ann = rep_Ann;
            Rep_Sect = rep_Sect;
            Hosting = hosting;
        }
        [HttpGet]
        public async Task<IEnumerable<Sector>> Get()
        {
            return await Rep_Sect.List();
        }

        // GET: api/Home/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<Annonce> Get(int id)
        {
            string chemain = Path.Combine("wwwroot", "Images_Annonce");
            var find = await Rep_Ann.Find(id);
            return find;
        }

        // POST: api/Home
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Home/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
