import { Nodes, Node, NodeEvents } from "./nodes";
import { PlaceholderInfo } from "../dnd/interfaces";
import { useInternalManager } from "../manager/useInternalManager";


export type ManagerEvents = Record<NodeEvents, Node> & {
  placeholder: PlaceholderInfo
}

export type ManagerState = {
  nodes: Nodes,
  events: ManagerEvents
}

export type ConnectedManager<S = null> = useInternalManager<S>;