
class Queue {
    constructor() {
        this.items = []
        this.count = 0
         
    }

    // Add element to top of queue
    enqueue(element) {
        this.items[this.count] = element
        let queue_res=`${element}`; //console.log(`added to ${this.count}`);
        this.count += 1;
        let count=this.count -1;
        //return [queue_res,count];
        console.log(queue_res);
        return [queue_res, count];
    }

    // Return and remove top element in queue
    // Return undefined if queue is empty
    dequeue() {
        if(this.count == 0) return undefined
        let deleteItem = this.items.shift();
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Check top element in queue
    peek() {
        if(this.count == 0) return undefined
        console.log(`Top element is ${this.items[0]}`)
        return this.items[0]
    }

    // Check if queue is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Queue is empty' : 'Queue is NOT empty')
        return this.count == 0
    }

    // Check size of queue
    size() {
        console.log(`${this.count} elements in queue`)
        return this.count
    }

    // Print elements in queue
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    // Clear queue
    clear() {
        this.items = []
        this.count = 0
        console.log('Queue cleared..')
        return this.items
    }
}

const queue = new Queue()

$(document).ready(function(){
    $("#btn-enqueue").on("click", function(){
        let queue_data = $("#st_data").val().trim();
        if(queue_data === ""){
            alert("Enter a value to enqueue.");
            return;
        }
        queue_data = queue.enqueue(queue_data);
        $("#queue").append(`<div id="st${queue_data[0]}" class="row bg-primary enqueue">${queue_data[0]}</div>`);
    });
    $("#btn-dequeue").on("click", function(){
        let dequeue_data = queue.dequeue();
        if(dequeue_data == undefined){
            alert("The queue is empty.");
            return;
        }
        $("#dequeueped").append(`<div class="row dequeue text-bg-danger border border-light">${dequeue_data}</div>`)
        $("#queue").children(".enqueue").first().remove();
    })
    $("#btn-peek").on("click", function(){
        let peek_data = queue.peek();
        if(peek_data == undefined){
            alert("The queue is empty.");
            return;
        }
        $(`#st${peek_data}`).removeClass("bg-primary").addClass("peek");
        setTimeout(function(){
            $(`#st${peek_data}`).removeClass("peek").addClass("bg-primary");
        }, 500);
    });
    $("#btn-clear").on("click", function(){
        queue.clear();
        $("#queue, #dequeueped").empty();
    });
});