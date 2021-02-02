using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.Repository
{
  public interface Repository<TEntity>
    {
         Task<List<TEntity>>List();
        Task<TEntity> Find(int id);
        Task Add(TEntity entity);
        Task Update(TEntity entity);
        Task Delete(int id);
    }
}
