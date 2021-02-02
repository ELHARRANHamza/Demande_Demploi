using Demmande_Emploi.Db;
using Demmande_Emploi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.Repository
{
    public class Rep_Ville : Repository<Ville>
    {
        public Rep_Ville(ApplicationDbContext context)
        {
            Context = context;
        }

        public ApplicationDbContext Context { get; }

        public async Task Add(Ville entity)
        {
            await Context.Villes.AddAsync(entity);
           await Save();
        }

        public async Task Delete(int id)
        {
            var find = await Find(id);
            Context.Villes.Remove(find);
            await Save();
        }

        public async Task<Ville> Find(int id)
        {
            var find = await Context.Villes.SingleOrDefaultAsync(v => v.id == id);
            return find;
        }

        public async Task<List<Ville>> List()
        {
            var liste_Ville = await Context.Villes.ToListAsync();
            return liste_Ville;
        }

        public async Task Update(Ville entity)
        {
            Context.Villes.Update(entity);
            await Save();
        }
        public async Task Save()
        {
            await Context.SaveChangesAsync();
        }
    }
}
