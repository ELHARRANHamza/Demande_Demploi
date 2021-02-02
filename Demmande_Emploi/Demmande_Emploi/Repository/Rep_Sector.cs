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
    public class Rep_Sector : Repository<Sector>
    {
        public Rep_Sector(ApplicationDbContext context)
        {
            Context = context;
        }

        public ApplicationDbContext Context { get; }

        public async Task Add(Sector entity)
        {
            await Context.Sectors.AddAsync(entity);
            await Save();
        }

        public async Task Delete(int id)
        {
            var find = await Find(id);
            Context.Sectors.Remove(find);
            await Save();
        }

        public async Task<Sector> Find(int id)
        {
            var find = await Context.Sectors.SingleOrDefaultAsync(v => v.id == id);
            return find;
        }

        public async Task<List<Sector>> List()
        {
            string chemain = Path.Combine("wwwroot", "Images_Annonce");
            var liste_Sector = await Context.Sectors.Select(s =>new Sector { 
            id=s.id,
            sector_Nom=s.sector_Nom,
            annonces=s.annonces.Select(a => new Annonce
            {
                id=a.id,
                datePub = a.datePub,
                DescriptionStage = a.DescriptionStage,
                Image = Path.Combine(chemain, a.Image),
                nomStage = a.nomStage
            }).ToList()
            }).ToListAsync();
            return liste_Sector;
        }

        public async Task Update(Sector entity)
        {
            Context.Sectors.Update(entity);
            await Save();
        }
        public async Task Save()
        {
            await Context.SaveChangesAsync();
        }
    }
}
