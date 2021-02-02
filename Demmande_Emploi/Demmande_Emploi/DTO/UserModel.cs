using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Cinema.ViewModel
{
    public class UserModel
    {
        public string Id { get; set; }
        [StringLength(256), Required, DataType(DataType.EmailAddress)]
        public string email { get; set; }
        [Required]
        public string password { get; set; }
        [Required]
        public string userName { get; set; }
        [Required]
        public bool emailConfirmed { get; set; }
        [DataType(DataType.PhoneNumber)]
        [Required]
        public string phoneNumber { get; set; }

    }
}

