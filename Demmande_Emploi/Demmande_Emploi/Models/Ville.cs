using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.Models
{
    public class Ville
    {
        public int id { get; set; }
        [Required]
        public string ville_Name { get; set; }
        public IList<Annonce> annonces { get; set; }
    }
}
