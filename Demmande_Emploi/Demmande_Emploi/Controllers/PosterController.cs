using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Demmande_Emploi.DTO;
using Demmande_Emploi.Models;
using Demmande_Emploi.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Demmande_Emploi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class PosterController : ControllerBase
    {
        public Repository<Poster> Rep_Post { get; }
        public Repository<Annonce> Rep_Ann { get; }
        public UserManager<AppUsers> UserManager { get; }
        public IHostingEnvironment Environment { get; }

        public PosterController(Repository<Poster>  rep_Post,
            Repository<Annonce> rep_Ann,
            UserManager<AppUsers> userManager,
            IHostingEnvironment environment)
        {
            Rep_Post = rep_Post;
            Rep_Ann = rep_Ann;
            UserManager = userManager;
            Environment = environment;
        }
        // GET: api/Poster
        [HttpGet("{id}", Name = "GetPoste")]
        public async Task<Annonce> Get(int id)
        {
            var find_Ann = await Rep_Ann.Find(id);
            return find_Ann;
        }
        // POST: api/Poster
        [HttpPost]
        public async Task Post([FromForm] Poster_Dto poster_Dto)
        {
            string fileName = "";
            if (poster_Dto.files.FileName != null)
            {
                string chemain = Path.Combine(Environment.WebRootPath, "CV");
                fileName = poster_Dto.files.FileName;
                string path = Path.Combine(chemain, fileName);
                await poster_Dto.files.CopyToAsync(new FileStream(path, FileMode.Create));
                //var findUser = await UserManager.Users.SingleOrDefaultAsync(u => u.Id == "5df91e90 - 5096 - 4f00 - 87aa - 694f03d3c8e2");
                var find_Ann = await Rep_Ann.Find(poster_Dto.id_Ann);
                var poster = new Poster()
                {
                    Cv = fileName,
                    date_Poster = DateTime.Now,
                    email = poster_Dto.email,
                    Message = poster_Dto.Message,
                    num_Tile = poster_Dto.num_Tile,
                    annonce = find_Ann
                    //users = findUser
                };
               await Rep_Post.Add(poster);
            }
        }

        // PUT: api/Poster/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Rep_Post.Delete(id);
        }
    }
}
