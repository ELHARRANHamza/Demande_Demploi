using Demmande_Emploi.Db;
using Demmande_Emploi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.Repository
{
    public class Rep_Poste : Repository<Poster>
    {
        public Rep_Poste(ApplicationDbContext context)
        {
            Context = context;
        }

        public ApplicationDbContext Context { get; }

        public async Task Add(Poster entity)
        {
            await Context.Posters.AddAsync(entity);
            Context.SaveChanges();
        }

        public async Task Delete(int id)
        {
            var find = await Find(id);
            Context.Posters.Remove(find);
            await Save();
        }

        public async Task<Poster> Find(int id)
        {
            var find = await Context.Posters.SingleOrDefaultAsync(v => v.id == id);
            return find;
        }

        public async Task<List<Poster>> List()
        {
            var liste_Poster = await Context.Posters.ToListAsync();
            return liste_Poster;
        }

        public async Task Update(Poster entity)
        {
            Context.Posters.Update(entity);
            await Save();
        }
        public async Task Save()
        {
            await Context.SaveChangesAsync();
        }
    }
}
