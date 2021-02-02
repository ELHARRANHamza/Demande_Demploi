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
    public class Rep_Annonce : Repository<Annonce>
    {
        public Rep_Annonce(ApplicationDbContext context)
        {
            Context = context;
        }

        public ApplicationDbContext Context { get; }

        public async Task Add(Annonce entity)
        {
            await Context.Annonces.AddAsync(entity);
            await Save();
        }

        public async Task Delete(int id)
        {
            var find = await Find(id);
           Context.Annonces.Remove(find);
           await Save();
        }

        public async Task<Annonce> Find(int id)
        {
            string chemain = Path.Combine("wwwroot", "Images_Annonce");
            string chemain1 = Path.Combine("wwwroot", "CV");
            var find = await Context.Annonces.Select(a => new Annonce { 
                id=a.id,
                datePub = a.datePub,
                DescriptionStage = a.DescriptionStage,
                Image = Path.Combine(chemain, a.Image),
                nomStage = a.nomStage,
                categories=a.categories,
                sector=a.sector,
                type=a.type,
                ville=a.ville,
                posters=a.posters.Select(p =>new Poster
                {
                    id = p.id,
                    date_Poster = p.date_Poster,
                    Message = p.Message,
                    email = p.email,
                    num_Tile = p.num_Tile,
                    Cv = Path.Combine(chemain1, p.Cv)
                })
                .ToList()
            })
               .SingleOrDefaultAsync(v => v.id == id);
            return find;
        }

        public async Task<List<Annonce>> List()
        {
            var liste_Annonce = await Context.Annonces.
                Include(a =>a.categories).
                Include(a =>a.type).
                Include(a =>a.ville).
                Include(a =>a.sector).
                ToListAsync();
            return liste_Annonce;
        }

        public async Task Update(Annonce entity)
        {
            Context.Annonces.Update(entity);
            await Save();
        }
        public async Task Save()
        {
            await Context.SaveChangesAsync();
        }
    }
}
