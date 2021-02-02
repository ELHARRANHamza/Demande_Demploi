using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.DTO
{
    public class LoginModels
    {
        [StringLength(256), Required, DataType(DataType.EmailAddress)]
        public string email { get; set; }
        [Required]
        public string password { get; set; }
        [Required]
        public bool Remember { get; set; }
    }
}
