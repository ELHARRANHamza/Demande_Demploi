using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.Models
{
    public class Type_
    {
        public int id { get; set; }
        [Required]
        [StringLength(15,MinimumLength =4)]
        public string nom { get; set; }
        public IList<Annonce> annonces { get; set; }

    }
}
