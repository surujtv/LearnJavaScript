/*  
    Some Important models you need to know before learn Asynchronous JavaScript.

    Memory Heap — this is where the memory allocation happens, all of our object variables are assigned here in a random manner.

    --------------------------------------------

    Call stack - this is where your function calls are stored. In short function, a stack is nothing but the simple stack data structure which keeps track of the function currently being executed.

    --------------------------------------------

    Javascript Web APIs
    These are the additional functionality, that helps us perform some additional tasks which cannot be run using the main thread. However, since our JavaScript runtime is single-threaded, it can export some tasks to the WEB APIs which helps us to respond to multiple threads. Example of some web APIs are:

    - DOM
    - Ajax (Network requests)
    - setTimeout()
    - Promises
    - Callback

    --------------------------------------------

    Callback Queue && Event Queue
    Since we know that Web APIs delegate some of the tasks to different threads, on completion of these tasks, how the main or desired functions are sent to the call stack.

    Event Queue is a special queue, which keeps track of all the functions queues, which are needed to be pushed into the call stack. The event queue is responsible for sending new functions to the track for processing. The queue data structure is required to maintain the correct sequence (FIFO) in which all operations should be sent for execution.

    --------------------------------------------

    Event Loop - 
    Here need to mention that, just placing our function does not necessarily simply that the function will get executed. This function has to be pushed into the call stack for execution and here the event loop comes into the picture. The event loop waits for the function stack (Call Stack) to be empty, once the call stack is empty this will push the first function from the event queue to the call stack, and in this way, the desired function will be called.

    Thus event loop works in a cyclic manner, where it continually checks whether or not the call stack is empty. If it is empty, new functions are added from the event queue. If it is not, then the current function call is processed.
*/

