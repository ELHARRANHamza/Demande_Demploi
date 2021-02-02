using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.Models
{
    public class Sector
    {
        public int id { get; set; }
        [Required]
        [StringLength(12,MinimumLength =3)]
        public string sector_Nom { get; set; }
        public IList<Annonce> annonces { get; set; }
    }
}
