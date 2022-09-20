using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace ToDos.BusinessObjects
{
    public class ToDo
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string? _id { get; set; }

        public int  id { get; set; }

        public string? toDoItemDescription { get; set; }

        public bool isCompleted { get; set; }

        public bool isImportant { get; set; }

        public bool isDeleted { get; set; }
    }
}

