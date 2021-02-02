using Demmande_Emploi.Db;
using Demmande_Emploi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.Repository
{
    public class Rep_Categories : Repository<Categories>
    {
        public Rep_Categories(ApplicationDbContext context)
        {
            Context = context;
        }

        public ApplicationDbContext Context { get; }

        public async Task Add(Categories entity)
        {
            await Context.Categories.AddAsync(entity);
            await Save();
        }

        public async Task Delete(int id)
        {
            var find = await Find(id);
            Context.Categories.Remove(find);
            await Save();
        }

        public async Task<Categories> Find(int id)
        {
            var find = await Context.Categories.SingleOrDefaultAsync(v => v.id == id);
            return find;
        }

        public async Task<List<Categories>> List()
        {
           string chemain = Path.Combine("wwwroot", "Images_Annonce");
            var liste_Categories = await Context.Categories
                     .Select(p => new Categories
                     {
                         cat_Nom = p.cat_Nom,
                         id = p.id,
                         annonces = p.annonces.Select(a => new Annonce
                         {
                             datePub = a.datePub,
                             DescriptionStage = a.DescriptionStage,
                             Image= Path.Combine(chemain, a.Image),
                             nomStage=a.nomStage
                         }).ToList()
  
                      }).ToListAsync();
            return liste_Categories;
        }

        public async Task Update(Categories entity)
        {
            Context.Categories.Update(entity);
            await Save();
        }
        public async Task Save()
        {
            await Context.SaveChangesAsync();
        }
    }
}
