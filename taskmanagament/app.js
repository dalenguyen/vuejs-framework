new Vue({
	el: '#tasks',

	data: {
		tasks: [
		],

		newTask: ''
	},

	filters: {
		inProcess: function(tasks){
			return tasks.filter(function(task){
				return ! task.completed;
			});
		}
	},

	computed: {
		completions: function(){
			return this.tasks.filter(function(task){
				return task.completed;
			})
		},

		remaining: function(){
			return this.tasks.filter(function(task){
				return ! task.completed;
			})
		}
	},

	methods: {
		addTask: function(e){
			e.preventDefault();

			if(! this.newTask) return;

			this.tasks.push({
				body: this.newTask,
				completed: false
			});

			this.newTask = '';
		},

		removeTask: function(task){
			this.tasks.$remove(task);
		},

		editTask: function(task){
			// xóa nhiệm vụ
				this.removeTask(task);
			// cập nhật input
				this.newTask = task.body;
			// đưa con trỏ vào input
				this.$els.newtask.focus();
		},

		completeTask: function(task){
			task.completed = true;
		},

		completeAll: function(){
			this.tasks.forEach(function(task){
				task.completed = true;
			})
		},

		toggleCompleteTask: function(task){
			task.completed = ! task.completed;
		},

		clearCompleted: function(){
			// trả array = [complted = false]
			this.tasks = this.tasks.filter(function(task){
				return ! task.completed;
			})
		}
	}
});

