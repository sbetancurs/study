const bunny = {
  name: "sebas",
  tasks: ["speak", "learn", "teach"],
  showTasks: function () {
    this.tasks.forEach((task) => {
      console.log(this.name + " wants to " + task);
    });
  },
};

bunny.showTasks();
