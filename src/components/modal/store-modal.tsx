"use client";

import { z } from "zod";
import useStoreModal from "../../../hooks/usestoremodal";
import Modal from "../ui/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


  const formSchema = z.object({
    name: z.string().min(1),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  export const StoreModal = () => {
    const storeModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
      },
    });
    return (
      <Modal
        title="buat store"
        description="tambah store untuk menambahkan produk"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
      >
        <div>
          <div className="space-y-4 py-2 pb-4">
            <Form {...form}>
              <form>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>jembot</FormLabel>
                      <FormControl>
                        <Input placeholder="nama toko" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end">
                  <Button>cancel</Button>
                  <Button>continue</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Modal>
    );
  };

