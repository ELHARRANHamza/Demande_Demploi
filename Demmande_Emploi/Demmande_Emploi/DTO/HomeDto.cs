using Demmande_Emploi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demmande_Emploi.DTO
{
    public class HomeDto
    {
        public IList<Categories> GetCategories { get; set; }
    }
}
