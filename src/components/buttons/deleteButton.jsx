import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import { BiEdit, BiTrash, BiLink } from "react-icons/bi";
import { axios } from "@/lib";
import { useAppStore } from "@/stores";

export default function DeleteButton({ link, fetchData }) {
  const [isModal, setIsModal] = useState(false);
  const { loading, setLoading } = useAppStore();

  const handleDelete = async () => {
    setLoading(true);

    await axios.delete(link);

    fetchData();
  };

  const handleClick = () => {
    setIsModal(true);
  };

  return (
    <div>
      <Button
        variant="bordered"
        size="sm"
        color="danger"
        isIconOnly
        onPress={handleClick}
      >
        <BiTrash size={18} />
      </Button>

      <Modal
        size="lg"
        isOpen={isModal}
        onOpenChange={setIsModal}
        backdrop="blur"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Delete</ModalHeader>
          <ModalBody>are you sure you want to delete it?</ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              variant="light"
              onPress={() => {
                setIsModal(false);
              }}
            >
              Close
            </Button>
            <Button isLoading={loading} color="danger" onPress={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
