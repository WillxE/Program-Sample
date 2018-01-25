istate = [1,2,5,3,4,0,6,7,8]
gstate = [0,1,2,3,4,5,6,7,8]
class Node:
    def __innit__(self,state,parent,operator,depth,cost):
        self.state = state
        self.parent = parent
        self.operator = operator
        self.depth = depth
        self.cost = cost

def up(state):
    nstate = state[:]
    zero = nstate.index(0)
    if zero not in [0,1,2]:
        temp = nstate[zero-3]
        nstate[zero-3] = 0
        nstate[zero] = temp
        return nstate
    else:
        return None
def down(state):
    nstate = state[:]
    zero = nstate.index(0)
    if zero not in [6,7,8]:
        temp = nstate[zero+3]
        nstate[zero+3] = 0
        nstate[zero] = temp
        return nstate
    else:
        return None
def left(state):
    nstate = state[:]
    zero = nstate.index(0)
    if zero not in [0,3,6]:
        temp = nstate[zero-1]
        nstate[zero-1] = 0
        nstate[zero] = temp
        return nstate
    else:
        return None
def right(state):
    nstate = state[:]
    zero = nstate.index(0)
    if zero not in [2,5,8]:
        temp = nstate[zero+1]
        nstate[zero+1] = 0
        nstate[zero] = temp
        return nstate
    else:
        return None

def build_node(state,parent,operator,depth,cost):
    Node.state = state
    Node.parent = parent
    Node.operator = operator
    Node.depth = depth
    Node.cost = cost
    return Node.state,Node.parent,Node.operator,Node.depth,Node.cost

def expand_node(node,nodes):
    expanded_nodes = []
    expanded_nodes.append(build_node(up(node[0]),node,'Up',node[3] + 1,0))
    expanded_nodes.append(build_node(down(node[0]),node,'Down',node[3] + 1,0))
    expanded_nodes.append(build_node(left(node[0]),node,'Left',node[3] + 1,0))
    expanded_nodes.append(build_node(right(node[0]),node,'Right',node[3] + 1,0))
    expanded_nodes = [node for node in expanded_nodes if node[0] != None]
    return expanded_nodes
def BFS(istate,gstate):
    i = 0
    nodes = []
    nodes.append(build_node(istate,None,None,0,0))
    while True:
        print i
        i = i+1
        if len(nodes) == 0:
            return None
        node = nodes.pop(0)
        if node[0] == gstate:
            move = []
            temp = node
            print node[0]
            print node[1]
            print node[2]
            while True:
                move.insert(0,temp[2])
                if temp[3] == 1: break
                temp = temp[1]
            return move
        nodes.extend(expand_node(node,nodes))

BFS(istate,gstate)