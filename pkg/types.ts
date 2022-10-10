export type { Producer } from "./producer"
export type { Consumer } from "./consumer"

export type Header = { key: string; value: string }

export type Message = {
  topic: string
  partition: number
  offset: number
  timestamp: number
  key: string
  value: string
  headers: Header[]
}
