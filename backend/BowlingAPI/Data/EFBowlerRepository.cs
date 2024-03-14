using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.EntityFrameworkCore;

namespace BowlingAPI.Data
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlerContext _bowlerContext;
        public EFBowlerRepository(BowlerContext temp)
        {
            _bowlerContext = temp;
        }
        public IEnumerable<Bowler> Bowlers => _bowlerContext.Bowlers
            .Include(b => b.Team).ToList(); //this will add another nested layer inside the bowler JSON that contains info from the teams table, joined on the TeamID
    }
}
