using Demmande_Emploi.Db;
using Demmande_Emploi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.Repository
{
    public class Rep_Type : Repository<Type_>
    {
        public Rep_Type(ApplicationDbContext context)
        {
            Context = context;
        }

        public ApplicationDbContext Context { get; }

        public async Task Add(Type_ entity)
        {
            await Context.Types.AddAsync(entity);
            await Save();
        }

        public async Task Delete(int id)
        {
            var find = await Find(id);
            Context.Types.Remove(find);
            await Save();
        }

        public async Task<Type_> Find(int id)
        {
            var find = await Context.Types.SingleOrDefaultAsync(v => v.id == id);
            return find;
        }

        public async Task<List<Type_>> List()
        {
            var liste_Type_ = await Context.Types.ToListAsync();
            return liste_Type_;
        }

        public async Task Update(Type_ entity)
        {
            Context.Types.Update(entity);
            await Save();
        }
        public async Task Save()
        {
            await Context.SaveChangesAsync();
        }
    }
}
