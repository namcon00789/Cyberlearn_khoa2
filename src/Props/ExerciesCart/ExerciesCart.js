import React, { Component } from 'react'
import CartModal from './CartModal'
import ProductListEXC from './ProductListEXC'

export default class ExerciesCart extends Component {

    state = {
        gioHang: [

        ]
    }

    themGioHang = (sanPham) => {
        console.log(sanPham);
        let spGioHang = {
            maSP: sanPham.maSP,
            tenSP: sanPham.tenSP,
            donGia: sanPham.giaBan,
            soLuong: 1,
            hinhAnh: sanPham.hinhAnh
        }
        //Tìm xem sản phẩm có trong giỏ hàng chưa
        let index = this.state.gioHang.findIndex(spGH => spGH.maSP === spGioHang.maSP);
        if (index !== - 1) {
            //Tìm thấy sản phẩm được click chứa trong giỏ hàng => tăng só lượng
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.gioHang[index].soLuong += 1;
        } else {
            // sản phẩm không tìm thấy trong giỏ hàng chứa sản phẩm đó thì thêm sản phẩm vào
            this.state.gioHang.push(spGioHang);
        }

        // let gioHangCapNhat = [...this.state.gioHang];

        this.setState({
            gioHang: this.state.gioHang
        })
    }

    xoaGioHang = (maSP) => {
        // Thực hiện tính năng xóa giỏ hàng
        console.log(maSP);
        let index = this.state.gioHang.findIndex
            (spGioHang => spGioHang.maSP === maSP);
        if (index !== -1) {
            this.state.gioHang.splice(index, 1);
        }
        this.setState({
            gioHang: this.state.gioHang
        })
        // this.setstate
    }

    tinhTongSoLuong = () => {
        // Dùng for
        // let tongSoLuong = 0;
        // for(let i=0;i<this.state.gioHang.length;i++){
        //     let spGioHang = this.state.gioHang[i];
        //     tongSoLuong += spGioHang.soLuong;
        // }
        // return tongSoLuong;
        return this.state.gioHang.reduce((tongSoLuong,spGioHang,index)=>{
            return tongSoLuong+=spGioHang.soLuong;
        },0)
    }

    tangGiamSoLuong = (maSP,number) => { // 1 tăng -1 giảm
        let gioHang = [...this.state.gioHang];

        let index = gioHang.findIndex(spGioHang=>spGioHang.maSP === maSP);
        if(index !== 1){
            if(gioHang[index].soLuong <= 1 && number === -1){
                alert('Số lượng tối thiểu ít nhất là 1!')
                return;
            }
            // Tìm ra spGioHang trong giỏ hàng thử index => tăng số lượng
            gioHang[index].soLuong += number;
        }

        //render và gán lại giá trị state.gioHang 
        this.setState({
            gioHang:gioHang
        })
    }
    render() {
        return (


            <div className='container-fluid'>
                <h3 className='text-center'>Bài tập giỏ hàng</h3>
                <div className='text-right'>
                    <span style={{ width: 37, cursor: 'pointer', margin: '30px' }} data-toggle="modal" data-target="#modelId">
                        <i className='fa fa-cart'><i class="fa fa-cart-arrow-down"></i>({this.tinhTongSoLuong()})</i>
                        <h6 style={{ display: 'inline' }}>Giỏ hàng</h6>
                    </span>
                </div>
                <CartModal tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                <ProductListEXC themGioHang={this.themGioHang} />
            </div>
        )
    }
}


