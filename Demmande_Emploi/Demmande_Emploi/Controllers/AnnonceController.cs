using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Demmande_Emploi.DTO;
using Demmande_Emploi.Models;
using Demmande_Emploi.Repository;
using Microsoft.AspNetCore.Authorization;
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
    public class AnnonceController : ControllerBase
    {
        public Repository<Annonce> Rep_Ann { get; }
        public UserManager<AppUsers> UserManager { get; }
        public Repository<Categories> Rep_Cat { get; }
        public Repository<Type_> Rep_Type { get; }
        public Repository<Sector> Rep_Sector { get; }
        public Repository<Ville> Rep_Ville { get; }
        public IHostingEnvironment Hosting { get; }

        public AnnonceController(Repository<Annonce> rep_Ann,
            UserManager<AppUsers> userManager,
            Repository<Categories> rep_Cat,
            Repository<Type_> rep_Type,
            Repository<Sector> rep_Sector,
            Repository<Ville> rep_Ville,
            IHostingEnvironment hosting
            )
        {
            Rep_Ann = rep_Ann;
            UserManager = userManager;
            Rep_Cat = rep_Cat;
            Rep_Type = rep_Type;
            Rep_Sector = rep_Sector;
            Rep_Ville = rep_Ville;
            Hosting = hosting;
        }
        // GET: api/Annonce
        [HttpGet]
        public async Task<IEnumerable<Annonce_Dto>> Get()
        {
            //AppUsers find_User = await UserManager.Users.SingleOrDefaultAsync(u => u.Id == "5a4696fc-f1cb-49b1-84e2-684ee69e81df");
            var list_Ann = await Rep_Ann.List();
            var list_Nv_Ann = new List<Annonce_Dto>();
            string chemain = "";
            string path = "";
            foreach (var item in list_Ann)
            {
                chemain = Path.Combine("wwwroot", "Images_Annonce");
                path = Path.Combine(chemain, item.Image);
                list_Nv_Ann.Add(new Annonce_Dto()
                {
                   id=item.id,
                    descriptionStage = item.DescriptionStage,
                    nomStage = item.nomStage,
                    image=path,
                    id_Cat=item.categories.id,
                    id_sector=item.sector.id,
                    id_type=item.type.id,
                    id_ville=item.ville.id
                }) ;
            }
            return list_Nv_Ann;/*.Where(a => a.users == find_User).ToList();*/
        }
        // POST: api/Annonce
        [HttpPost]
        public async Task<IActionResult> Post([FromForm] Annonce_Dto annonce_Dto)
        {
            string fileName = "";
            if (annonce_Dto.files.FileName != null)
            {
                string chemain = Path.Combine(Hosting.WebRootPath, "Images_Annonce");
                fileName = annonce_Dto.files.FileName;
                string path = Path.Combine(chemain, fileName);
                await annonce_Dto.files.CopyToAsync(new FileStream(path, FileMode.Create));
                var find_User = await UserManager.Users.SingleOrDefaultAsync(u => u.Id == "5a4696fc-f1cb-49b1-84e2-684ee69e81df");
                var find_Cat = await Rep_Cat.Find(annonce_Dto.id_Cat);
                var find_Type = await Rep_Type.Find(annonce_Dto.id_type);
                var find_Sector = await Rep_Sector.Find(annonce_Dto.id_type);
                var find_Ville = await Rep_Ville.Find(annonce_Dto.id_ville);
                var Ann = new Annonce
                {
                    categories = find_Cat,
                    sector = find_Sector,
                    type = find_Type,
                    DescriptionStage = annonce_Dto.descriptionStage,
                    nomStage = annonce_Dto.nomStage,
                    ville = find_Ville,
                    Image=fileName,
                    users=find_User,
                    datePub=DateTime.Now
                };
               await Rep_Ann.Add(Ann);
                return Ok();
            }
            return BadRequest();
        }
        // PUT: api/Annonce/5
        [HttpPut("{id}")]
        async Task<IActionResult> Put(int id,[FromForm] Annonce_Dto annonce_Dto)
        {
            var find = await Rep_Ann.Find(id);
            string img = find.Image;
            string fileName = "";
            if (annonce_Dto.files.FileName != null)
            {
                string chemain = Path.Combine(Hosting.WebRootPath, "Images_Annonce");
                fileName = annonce_Dto.files.FileName;
                string path = Path.Combine(chemain, fileName);
                string oldPath = Path.Combine(chemain, img);
                if (path != oldPath)
                {
                    System.IO.File.Delete(oldPath);
                    await annonce_Dto.files.CopyToAsync(new FileStream(path, FileMode.Create));
                }
               
            }
            else
            {
                fileName = img;
            }
            var find_Cat = await Rep_Cat.Find(annonce_Dto.id_Cat);
            var find_Type = await Rep_Type.Find(annonce_Dto.id_type);
            var find_Sector = await Rep_Sector.Find(annonce_Dto.id_type);
            var find_Ville = await Rep_Ville.Find(annonce_Dto.id_ville);
            find.categories = find_Cat;
            find.sector = find_Sector;
            find.type = find_Type;
            find.DescriptionStage = annonce_Dto.descriptionStage;
            find.nomStage = annonce_Dto.nomStage;
            find.ville = find_Ville;
            find.Image = fileName;
            await Rep_Ann.Update(find);
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
           await Rep_Ann.Delete(id);
            return Ok();
        }
    }
}
