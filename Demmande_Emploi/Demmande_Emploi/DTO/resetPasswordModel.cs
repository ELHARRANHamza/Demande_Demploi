using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.DTO
{
    public class resetPasswordModel
    {
        public string id { get; set; }
        [Required]
        public string token { get; set; }
        [Required]
        public string password { get; set; }
    }
}
