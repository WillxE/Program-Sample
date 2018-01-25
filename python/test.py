import time
import resource
start_time = time.time()

istate = [1,2,5,3,4,0,6,7,8]
gstate = [0,1,2,3,4,5,6,7,8]

state = istate
explored = []
explored_tuple = set()
frontier = []
parrent = []
direction = []
route = []
path = []
max_frontier = []
deep = []
start_mem = resource.getrusage(resource.RUSAGE_SELF).ru_maxrss
delta_mem = 0
max_mem = 0

def check(state):
    if state == gstate:
        return True
    return

def up(state):
    zero = state.index(0)
    ustate = state[:]
    if zero >= 3:
        ustate[zero] = ustate[zero-3]
        ustate[zero-3] = 0
    return ustate
def down(state):
    zero = state.index(0)
    dstate = state[:]
    if zero < 6:
        dstate[zero] = dstate[zero+3]
        dstate[zero+3] = 0
    return dstate
def left(state):
    zero = state.index(0)
    lstate = state[:]
    if zero != 0 and zero != 3 and zero != 6:
        lstate[zero] = lstate[zero-1]
        lstate[zero-1] = 0
    return lstate
def right(state):
    zero = state.index(0)
    rstate = state[:]
    if zero != 2 and zero != 5 and zero != 8:
        rstate[zero] = rstate[zero+1]
        rstate[zero+1] = 0
    return rstate

def generate_frontierUDLR(state):
    par = explored.index(state)
    if tuple(up(state)) not in explored_tuple:
        add_queue(up(state),par,1)
    if tuple(down(state)) not in explored_tuple:
        add_queue(down(state),par,2)
    if tuple(left(state)) not in explored_tuple:
        add_queue(left(state),par,3)
    if tuple(right(state)) not in explored_tuple:
        add_queue(right(state),par,4)

def generate_frontierRLDU(state):
    par = explored.index(state)
    if tuple(right(state)) not in explored_tuple:
        add_queue(right(state),par,4)
    if tuple(left(state)) not in explored_tuple:
        add_queue(left(state),par,3)
    if tuple(down(state)) not in explored_tuple:
        add_queue(down(state),par,2)
    if tuple(up(state)) not in explored_tuple:
        add_queue(up(state),par,1)
def add_explored(state):
    s = tuple(state)
    if s not in explored_tuple:
        explored_tuple.add(s)
        explored.append(state)

def add_queue(node,par,dire):
    try:
        frontier.index(node)
    except ValueError:
        if dire == 1:
            direction.append('Up')
        if dire == 2:
            direction.append('Down')
        if dire == 3:
            direction.append('Left')
        if dire == 4:
            direction.append('Right')
        frontier.append(node)
        parrent.append(par)

def de_queue():
    del frontier[0]

def de_stack():
    del frontier[len(frontier)-1]

def BFS(state):
    add_queue(state,-1,9)
    while frontier != []:
        tstate = frontier[0][:]
        de_queue()
        add_explored(tstate)
        print('loop %s'%(len(explored)))
        current = explored.index(tstate)
        delta_mem = (resource.getrusage(resource.RUSAGE_SELF).ru_maxrss)
        if delta_mem >= start_mem:
            max_mem = delta_mem
        if check(tstate) == True:
            path.append(explored.index(tstate))
            while current >= 0:
                path.append(parrent[current])
                current = parrent[current]
            i = 0
            while i < (len(path)-2):
                route.append(direction[path[i]-1])
                i = i+1
            
            route.reverse()
            dep = max(path)-1
            deep.append(dep)
            while dep >= 0:
                deep.append(parrent[dep])
                dep = parrent[dep]
            if len(path) == len(deep):
                max_depth = len(path) -1
            if len(path) != len(deep):
                max_depth = len(path) -2
            
            print('path_to_goal: %s' %(route))
            print('cost_of_path: %s' %(len(route)))
            print('nodes_expanded: %s' %(len(explored)-1))
            print('fringe_size: %s' %(len(frontier)))
            print('max_fringe_size: %s' %(max(max_frontier)))
            print('search_depth: %s' %(len(path)-2))
            print('max_search_depth: %s' %(max_depth))
            print('running_time: %s' %(time.time()-start_time))
            print('max_ram_usage: %s' %(max_mem))
            print explored_tuple
            break

        generate_frontierUDLR(tstate)
        max_frontier.append(len(frontier))



def DFS(state):
    add_queue(state,-1,9)
    while frontier != []:
        tstate = frontier[len(frontier)-1][:]
        de_stack()
        add_explored(tstate)
        if check(tstate) == True:
            print 'done'
            break
        print(len(explored))
        generate_frontierRLDU(tstate)

DFS(state)

        

    
  




