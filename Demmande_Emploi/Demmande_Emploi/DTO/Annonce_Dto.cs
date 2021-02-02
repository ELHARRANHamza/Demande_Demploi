using Demmande_Emploi.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.DTO
{
    public class Annonce_Dto
    {
        public int id { get; set; }
        [Required]
        public string nomStage { get; set; }
        [Required]
        [MinLength(10)]
        public string descriptionStage { get; set; }
        public string image { get; set; }
        public int id_Cat { get; set; }
        public int id_type { get; set; }
        public int id_sector { get; set; }
        public int id_ville { get; set; }
        public IFormFile files { get; set; }
    }
}
