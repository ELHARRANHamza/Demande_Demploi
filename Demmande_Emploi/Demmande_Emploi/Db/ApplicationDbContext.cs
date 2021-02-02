using Demmande_Emploi.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.Db
{
    public class ApplicationDbContext: IdentityDbContext<AppUsers>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {
        }
        public DbSet<Annonce> Annonces { get; set; }
        public DbSet<Categories> Categories { get; set; }
        public DbSet<Poster> Posters { get; set; }
        public DbSet<Sector> Sectors { get; set; }
        public DbSet<Type_> Types{ get; set; }
        public DbSet<Ville> Villes { get; set; }
        }
}
