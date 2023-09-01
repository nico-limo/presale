import "@testing-library/jest-dom/extend-expect"

// text-encoder.mock.ts
import { TextEncoder } from "util"

global.TextEncoder = TextEncoder
