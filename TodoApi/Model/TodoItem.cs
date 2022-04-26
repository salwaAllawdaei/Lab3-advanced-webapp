namespace TodoApi.Model;


public class TodoItem
{

    public uint TodoItemId { get; set; }
    public string? Task { get; set; }
    public string? Instructions { get; set; }
    public DateTime Deadline { get; set; } = DateTime.Now.AddDays(7);
    public bool AMustDo { get; set; } = true;
    public bool IsComplete { get; set; } = false;
}