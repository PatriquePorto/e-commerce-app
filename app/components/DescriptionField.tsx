import React, { useState, useRef, useEffect } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

interface DescriptionField {
  setDescription: React.Dispatch<React.SetStateAction<any>>
  description: string
}

const DescriptionField: React.FC<DescriptionField> = ({setDescription, description}) => {
  const [focus, setFocus] = useState<boolean>(false)
  const editon = useEditor({
    extensions: [
      StarterKit
    ],
    editorProps: {
      attributes: {
        class: 'prose w-full focus:outline-none leading-5 prose-a:text-pink-600 prose-a:font-semibold prose-a:no-underline'
      }
    },
    content: description
  })

  const html = editon?.getHTML()

  useEffect(() => {
    setDescription(html)
    console.log(html)
  }, [html])

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setFocus(false)
      }
    }
  })

  return (
    <div>DescriptionField</div>
  )
}

export default DescriptionField