using Microsoft.Extensions.Configuration;
using ToDos.ApplicationServices;
using ToDos.DAL;
using ToDos.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton<IToDoDataServices, ToDoDataServices>();
builder.Services.AddTransient<IToDoServices, ToDoApplicationServices>();
builder.Services.Configure<ToDoDBConfig>(builder.Configuration.GetSection("MongoDB"));
builder.Services.AddControllers();
builder.Services.AddControllers()
    .AddJsonOptions(
        options => options.JsonSerializerOptions.PropertyNamingPolicy = null);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

