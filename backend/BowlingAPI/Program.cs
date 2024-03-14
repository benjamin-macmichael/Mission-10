using BowlingAPI.Data;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.EntityFrameworkCore;

//Ben Macmichael
//Section 003
//Bowling League .NET & React app
//
//This is the backend that provides the API for the React frontend to call to populate the bowlers table on the website

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors();

builder.Services.AddDbContext<BowlerContext>(options =>
options.UseSqlite(builder.Configuration["ConnectionStrings:BowlerConnection"])
);

builder.Services.AddScoped<IBowlerRepository, EFBowlerRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//allow React frontend to pull API
app.UseCors(p => p.WithOrigins("http://localhost:3000"));

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
