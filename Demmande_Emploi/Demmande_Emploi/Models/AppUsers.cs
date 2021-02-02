using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.Models
{
    public class AppUsers:IdentityUser
    {
        public string Image { get; set; }
        public IList<Annonce> annonces { get; set; }
        public  IList<Poster> posters { get; set; }
        public string roles_ { get; set; }
    }
}
