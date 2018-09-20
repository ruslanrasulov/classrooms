using System.Collections.Generic;
using AutoMapper;

namespace Classrooms.Api.Web.Extensions
{
    public static class AutoMapperExtensions
    {
        public static IEnumerable<TOut> MapEnumerable<TIn, TOut>(this IMapper mapper, IEnumerable<TIn> source)
        {
            return mapper.Map<IEnumerable<TIn>, IEnumerable<TOut>>(source);
        }
    }
}