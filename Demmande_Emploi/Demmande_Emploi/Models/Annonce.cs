using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.Models
{
    public class Annonce
    {
        public int id { get; set; }
        [Required]
        public string nomStage { get; set; }
        [Required]
        [MinLength(10)]
        public string DescriptionStage { get; set; }
        public string Image { get; set; }
        public Categories categories { get; set; }
        public  Type_ type { get; set; }
        public Sector sector { get; set; }
        public Ville ville { get; set; }
        public AppUsers users { get; set; }
        public IList<Poster> posters { get; set; }
        public DateTime datePub { get; set; }
    }
}
