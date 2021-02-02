using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.DTO
{
    public class Roles_DTO
    {
        public string id { get; set; }
        [Required]
        public string name { get; set; }
    }
}
