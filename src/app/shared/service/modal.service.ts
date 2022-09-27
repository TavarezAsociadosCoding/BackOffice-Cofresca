<<<<<<< HEAD
import { Injectable } from '@angular/core';
// import { ModalConfig } from 'src/app/core/models/modal.model';
import Swal from 'sweetalert2';
import { ModalConfig } from '../interface/modal.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

=======
import { Injectable } from "@angular/core";
import { ModalConfig } from "src/app/core/interceptors/modal.model";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class ModalService {
>>>>>>> new-09-09-2022
  constructor() {}

  /**
   * @param config
   * @param confirmFunc
   * @description
   * This function creates a modal with the given config and calls the confirmFunc when the user clicks the confirm button
   * @returns {void}
   */
<<<<<<< HEAD
  public async createRegisterModal(config: ModalConfig, confirmFunc: () => void): Promise<void> {
=======
  public async createRegisterModal(
    config: ModalConfig,
    confirmFunc: () => void
  ): Promise<void> {
>>>>>>> new-09-09-2022
    const { title, text, confirmButtonText, cancelButtonText } = config;
    const { isConfirmed } = await Swal.fire({
      title,
      text,
      confirmButtonText,
      cancelButtonText,
      showCancelButton: true,
      showCloseButton: true,
<<<<<<< HEAD
      imageUrl: '../../../assets/images/modalLogo.png',
=======
      imageUrl: "../../../assets/images/modalLogo.png",
>>>>>>> new-09-09-2022
      imageHeight: 65,
    });
    if (isConfirmed) {
      await confirmFunc();
    }
  }

<<<<<<< HEAD
  public async createRegisterModalWithReject(config: ModalConfig, confirmFunc: () => void, negativeFunc:() => void): Promise<void> {
=======
  public async createRegisterModalWithReject(
    config: ModalConfig,
    confirmFunc: () => void,
    negativeFunc: () => void
  ): Promise<void> {
>>>>>>> new-09-09-2022
    const { title, text, confirmButtonText, cancelButtonText } = config;
    const { isConfirmed } = await Swal.fire({
      title,
      text,
      confirmButtonText,
      cancelButtonText,
      showCancelButton: true,
      showCloseButton: true,
<<<<<<< HEAD
      imageUrl: '../../../assets/images/modalLogo.png',
=======
      imageUrl: "../../../assets/images/modalLogo.png",
>>>>>>> new-09-09-2022
      imageHeight: 65,
    });
    if (isConfirmed) {
      await confirmFunc();
<<<<<<< HEAD
    }else
    {
=======
    } else {
>>>>>>> new-09-09-2022
      await negativeFunc();
    }
  }

<<<<<<< HEAD
  public async confirmationModal(config: ModalConfig, confirmFunc: () => void): Promise<void> {
=======
  public async confirmationModal(
    config: ModalConfig,
    confirmFunc: () => void
  ): Promise<void> {
>>>>>>> new-09-09-2022
    const { title, text, confirmButtonText, cancelButtonText } = config;
    const { isConfirmed } = await Swal.fire({
      title,
      text,
<<<<<<< HEAD
      icon:'question',
=======
      icon: "question",
>>>>>>> new-09-09-2022
      confirmButtonText,
      cancelButtonText,
      showCancelButton: true,
      showCloseButton: true,
      imageHeight: 65,
    });
    if (isConfirmed) {
      await confirmFunc();
    }
  }
<<<<<<< HEAD
}
=======
  public async ValidationActivate(
    config: ModalConfig,
    confirmFunc: () => void
  ): Promise<void> {
    const { title, text } = config;
    const { isConfirmed } = await Swal.fire({
      title,
      text,
      showCancelButton: false,
      showCloseButton: false,
      imageUrl: "../../../assets/images/modalLogo.png",
      imageHeight: 65,
    });
    if (isConfirmed) {
      await confirmFunc();
    }
  }
}
>>>>>>> new-09-09-2022
