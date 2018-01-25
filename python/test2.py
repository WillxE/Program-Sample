istate = [0,1,2,3,4,5,6,7,8]
class Node:
    def __innit__(self,state,parent,operator,depth,cost):
        self.state = state
        self.parent = parent
        self.operator = operator
        self.depth = depth
        self.cost = cost

def build(a,b,c):
    Node.state = a
    Node.parent = b
    Node.operator = c
    return

build(1,2,3)
print Node.state


