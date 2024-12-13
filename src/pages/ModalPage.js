import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        Accept
      </Button>
    </div>
  );

  //pass action bar
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement</p>
    </Modal>
  );
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sed lacus id hendrerit. Mauris ultrices elementum nunc et accumsan. Nunc
        in nibh ullamcorper, sodales erat id, ullamcorper ex. Aliquam ultrices
        ac est in euismod. Nullam et vehicula elit, sagittis fermentum ipsum. Ut
        eget congue ipsum. Quisque accumsan eleifend tempor. Phasellus vulputate
        diam lobortis urna suscipit, vitae condimentum ligula gravida. Ut
        faucibus convallis consectetur. Sed mauris ex, aliquam vel mollis ac,
        tincidunt eu est. Etiam eros sapien, tristique vitae auctor nec,
        sollicitudin nec sem. Maecenas laoreet ornare ipsum, id mollis nisl
        auctor quis. Donec non pulvinar nibh. Maecenas nulla tortor, mattis ut
        nulla eu, tristique porttitor quam. Integer nec turpis turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sed lacus id hendrerit. Mauris ultrices elementum nunc et accumsan. Nunc
        in nibh ullamcorper, sodales erat id, ullamcorper ex. Aliquam ultrices
        ac est in euismod. Nullam et vehicula elit, sagittis fermentum ipsum. Ut
        eget congue ipsum. Quisque accumsan eleifend tempor. Phasellus vulputate
        diam lobortis urna suscipit, vitae condimentum ligula gravida. Ut
        faucibus convallis consectetur. Sed mauris ex, aliquam vel mollis ac,
        tincidunt eu est. Etiam eros sapien, tristique vitae auctor nec,
        sollicitudin nec sem. Maecenas laoreet ornare ipsum, id mollis nisl
        auctor quis. Donec non pulvinar nibh. Maecenas nulla tortor, mattis ut
        nulla eu, tristique porttitor quam. Integer nec turpis turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sed lacus id hendrerit. Mauris ultrices elementum nunc et accumsan. Nunc
        in nibh ullamcorper, sodales erat id, ullamcorper ex. Aliquam ultrices
        ac est in euismod. Nullam et vehicula elit, sagittis fermentum ipsum. Ut
        eget congue ipsum. Quisque accumsan eleifend tempor. Phasellus vulputate
        diam lobortis urna suscipit, vitae condimentum ligula gravida. Ut
        faucibus convallis consectetur. Sed mauris ex, aliquam vel mollis ac,
        tincidunt eu est. Etiam eros sapien, tristique vitae auctor nec,
        sollicitudin nec sem. Maecenas laoreet ornare ipsum, id mollis nisl
        auctor quis. Donec non pulvinar nibh. Maecenas nulla tortor, mattis ut
        nulla eu, tristique porttitor quam. Integer nec turpis turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sed lacus id hendrerit. Mauris ultrices elementum nunc et accumsan. Nunc
        in nibh ullamcorper, sodales erat id, ullamcorper ex. Aliquam ultrices
        ac est in euismod. Nullam et vehicula elit, sagittis fermentum ipsum. Ut
        eget congue ipsum. Quisque accumsan eleifend tempor. Phasellus vulputate
        diam lobortis urna suscipit, vitae condimentum ligula gravida. Ut
        faucibus convallis consectetur. Sed mauris ex, aliquam vel mollis ac,
        tincidunt eu est. Etiam eros sapien, tristique vitae auctor nec,
        sollicitudin nec sem. Maecenas laoreet ornare ipsum, id mollis nisl
        auctor quis. Donec non pulvinar nibh. Maecenas nulla tortor, mattis ut
        nulla eu, tristique porttitor quam. Integer nec turpis turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sed lacus id hendrerit. Mauris ultrices elementum nunc et accumsan. Nunc
        in nibh ullamcorper, sodales erat id, ullamcorper ex. Aliquam ultrices
        ac est in euismod. Nullam et vehicula elit, sagittis fermentum ipsum. Ut
        eget congue ipsum. Quisque accumsan eleifend tempor. Phasellus vulputate
        diam lobortis urna suscipit, vitae condimentum ligula gravida. Ut
        faucibus convallis consectetur. Sed mauris ex, aliquam vel mollis ac,
        tincidunt eu est. Etiam eros sapien, tristique vitae auctor nec,
        sollicitudin nec sem. Maecenas laoreet ornare ipsum, id mollis nisl
        auctor quis. Donec non pulvinar nibh. Maecenas nulla tortor, mattis ut
        nulla eu, tristique porttitor quam. Integer nec turpis turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sed lacus id hendrerit. Mauris ultrices elementum nunc et accumsan. Nunc
        in nibh ullamcorper, sodales erat id, ullamcorper ex. Aliquam ultrices
        ac est in euismod. Nullam et vehicula elit, sagittis fermentum ipsum. Ut
        eget congue ipsum. Quisque accumsan eleifend tempor. Phasellus vulputate
        diam lobortis urna suscipit, vitae condimentum ligula gravida. Ut
        faucibus convallis consectetur. Sed mauris ex, aliquam vel mollis ac,
        tincidunt eu est. Etiam eros sapien, tristique vitae auctor nec,
        sollicitudin nec sem. Maecenas laoreet ornare ipsum, id mollis nisl
        auctor quis. Donec non pulvinar nibh. Maecenas nulla tortor, mattis ut
        nulla eu, tristique porttitor quam. Integer nec turpis turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sed lacus id hendrerit. Mauris ultrices elementum nunc et accumsan. Nunc
        in nibh ullamcorper, sodales erat id, ullamcorper ex. Aliquam ultrices
        ac est in euismod. Nullam et vehicula elit, sagittis fermentum ipsum. Ut
        eget congue ipsum. Quisque accumsan eleifend tempor. Phasellus vulputate
        diam lobortis urna suscipit, vitae condimentum ligula gravida. Ut
        faucibus convallis consectetur. Sed mauris ex, aliquam vel mollis ac,
        tincidunt eu est. Etiam eros sapien, tristique vitae auctor nec,
        sollicitudin nec sem. Maecenas laoreet ornare ipsum, id mollis nisl
        auctor quis. Donec non pulvinar nibh. Maecenas nulla tortor, mattis ut
        nulla eu, tristique porttitor quam. Integer nec turpis turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sed lacus id hendrerit. Mauris ultrices elementum nunc et accumsan. Nunc
        in nibh ullamcorper, sodales erat id, ullamcorper ex. Aliquam ultrices
        ac est in euismod. Nullam et vehicula elit, sagittis fermentum ipsum. Ut
        eget congue ipsum. Quisque accumsan eleifend tempor. Phasellus vulputate
        diam lobortis urna suscipit, vitae condimentum ligula gravida. Ut
        faucibus convallis consectetur. Sed mauris ex, aliquam vel mollis ac,
        tincidunt eu est. Etiam eros sapien, tristique vitae auctor nec,
        sollicitudin nec sem. Maecenas laoreet ornare ipsum, id mollis nisl
        auctor quis. Donec non pulvinar nibh. Maecenas nulla tortor, mattis ut
        nulla eu, tristique porttitor quam. Integer nec turpis turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sed lacus id hendrerit. Mauris ultrices elementum nunc et accumsan. Nunc
        in nibh ullamcorper, sodales erat id, ullamcorper ex. Aliquam ultrices
        ac est in euismod. Nullam et vehicula elit, sagittis fermentum ipsum. Ut
        eget congue ipsum. Quisque accumsan eleifend tempor. Phasellus vulputate
        diam lobortis urna suscipit, vitae condimentum ligula gravida. Ut
        faucibus convallis consectetur. Sed mauris ex, aliquam vel mollis ac,
        tincidunt eu est. Etiam eros sapien, tristique vitae auctor nec,
        sollicitudin nec sem. Maecenas laoreet ornare ipsum, id mollis nisl
        auctor quis. Donec non pulvinar nibh. Maecenas nulla tortor, mattis ut
        nulla eu, tristique porttitor quam. Integer nec turpis turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sed lacus id hendrerit. Mauris ultrices elementum nunc et accumsan. Nunc
        in nibh ullamcorper, sodales erat id, ullamcorper ex. Aliquam ultrices
        ac est in euismod. Nullam et vehicula elit, sagittis fermentum ipsum. Ut
        eget congue ipsum. Quisque accumsan eleifend tempor. Phasellus vulputate
        diam lobortis urna suscipit, vitae condimentum ligula gravida. Ut
        faucibus convallis consectetur. Sed mauris ex, aliquam vel mollis ac,
        tincidunt eu est. Etiam eros sapien, tristique vitae auctor nec,
        sollicitudin nec sem. Maecenas laoreet ornare ipsum, id mollis nisl
        auctor quis. Donec non pulvinar nibh. Maecenas nulla tortor, mattis ut
        nulla eu, tristique porttitor quam. Integer nec turpis turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus
        sed lacus id hendrerit. Mauris ultrices elementum nunc et accumsan. Nunc
        in nibh ullamcorper, sodales erat id, ullamcorper ex. Aliquam ultrices
        ac est in euismod. Nullam et vehicula elit, sagittis fermentum ipsum. Ut
        eget congue ipsum. Quisque accumsan eleifend tempor. Phasellus vulputate
        diam lobortis urna suscipit, vitae condimentum ligula gravida. Ut
        faucibus convallis consectetur. Sed mauris ex, aliquam vel mollis ac,
        tincidunt eu est. Etiam eros sapien, tristique vitae auctor nec,
        sollicitudin nec sem. Maecenas laoreet ornare ipsum, id mollis nisl
        auctor quis. Donec non pulvinar nibh. Maecenas nulla tortor, mattis ut
        nulla eu, tristique porttitor quam. Integer nec turpis turpis.
      </p>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
