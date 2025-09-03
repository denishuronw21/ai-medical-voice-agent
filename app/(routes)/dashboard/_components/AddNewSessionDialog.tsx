"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { DialogClose } from "@radix-ui/react-dialog"
import { IconArrowRight } from "@tabler/icons-react"
import axios from "axios"


import React, { useState } from 'react'

function AddNewSessionDialog() {

    const [note,setNote] = useState<string>();
    const [loading,setLoading] = useState(false);

    const onClickNext = async ()=> {

      setLoading(true);
      const result = await axios.post('/api/suggest-doctors', {
        notes: note
      });

      console.log(result.data);
      setLoading(false);
      
    }

  return (
    <div>
      <Dialog>
  <DialogTrigger>
    <Button className='mt-3'>+ Start a Consultation</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Basic Details</DialogTitle>
      <DialogDescription asChild>
       <div>
        <h2>Add Symptoms or Any Other Details</h2>
        <Textarea 
        className="mt-1 h-[200px]" 
        placeholder="Add Details here..."
        onChange={(e)=>setNote(e.target.value)}
        />
       </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
            <Button variant={'outline'}>Cancel</Button>
        </DialogClose>
        
        <Button disabled={!note} onClick={()=>onClickNext()} >Next <IconArrowRight /> </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default AddNewSessionDialog
