using Demmande_Emploi.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.DTO
{
    public class Poster_Dto
    {
        public int id { get; set; }
        [Required]
        public string Message { get; set; }
        public string Cv { get; set; }
        public string num_Tile { get; set; }
        public string email { get; set; }
        public DateTime date_Poster { get; set; }
        public AppUsers users { get; set; }
        public int id_Ann { get; set; }
        public Annonce annonce { get; set; }
        public IFormFile files { get; set; }
    }
}
